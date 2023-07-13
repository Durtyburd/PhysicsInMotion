import numpy as np
import scipy.constants as sc
import matplotlib.pyplot as plt

class QMfdtd:
    def __init__(self, V0, bw, ke, sig):
        self.V0 = V0 * sc.value('electron volt')  # height of potential barrier in Joules
        self.ke = ke * sc.value('electron volt')  # kinetic energy of electron in Joules
        self.k0 = np.sqrt(self.ke * 2 * sc.m_e / (sc.hbar**2))  # wave vector of electron in m^-1
        self.bw = bw * sc.value('Angstrom star')  # potential barrier width in m
        self.sig = sig * sc.value('Angstrom star')  # Initial spread of Gaussian wavefunction
        self.dx = np.minimum((self.bw / 25.0), (self.sig / 25.0))  # grid cell size
        self.dt = 0.9 * sc.hbar / ((sc.hbar**2/(sc.m_e * self.dx**2)) + (self.V0 / 2.0))  # time step size
        length = 40 * np.maximum(self.bw, self.sig)  # length of the simulation domain
        self.ll = int(length / self.dx)  # total number of grid points in the domain
        vel = sc.hbar * self.k0 / sc.m_e
        self.tt = int(0.35 * length / vel / self.dt)  # total number of time steps in the simulation
        self.lx = np.linspace(0.0, length, self.ll)  # 1D position vector along x
        # potential barrier
        self.Vx = np.zeros(self.ll)
        bwgrid = int(self.bw/(2.0 * self.dx))
        bposgrid = int(self.ll/2.0)
        bl = bposgrid - bwgrid
        br = bposgrid + bwgrid
        self.Vx[bl:br] = self.V0
        # wavefunction arrays
        self.psir = np.zeros((self.ll))
        self.psii = np.zeros((self.ll))
        self.psimag = np.zeros(self.ll)
        ac = 1.0 / np.sqrt((np.sqrt(np.pi)) * self.sig)
        x0 = bl * self.dx - 6 * self.sig
        self.psigauss = ac * np.exp(-(self.lx - x0)**2 / (2.0 * self.sig**2))
        self.psir = self.psigauss * np.cos(self.k0 * self.lx)
        self.psii = self.psigauss * np.sin(self.k0 * self.lx)
        self.psimag = self.psir**2 + self.psii**2
        print(self.psir)
        # fdtd update coefficients
        self.c1 = sc.hbar * self.dt / (2.0 * sc.m_e * self.dx**2)
        self.c2 = self.dt / sc.hbar
        
#### The main FDTD update function.

    def fdtd_update(self):
        self.psii[1:self.ll - 1] = (self.c1 * (self.psir[2:self.ll] - 2.0 * self.psir[1:self.ll - 1]
                                    + self.psir[0:self.ll - 2]) 
                                    - self.c2 * self.Vx[1:self.ll - 1] * self.psir[1:self.ll - 1]
                                    + self.psii[1:self.ll - 1])
        self.psir[1:self.ll - 1] = (-self.c1 * (self.psii[2:self.ll] - 2.0 * self.psii[1:self.ll - 1]
                                    + self.psii[0:self.ll - 2]) 
                                    + self.c2 * self.Vx[1:self.ll - 1] * self.psii[1:self.ll - 1]
                                    + self.psir[1:self.ll - 1])
        self.psimag = self.psir**2 + self.psii**2


q1 = QMfdtd(600, .25, 500, .8)

for x in q1.lx:    
    print(x)

